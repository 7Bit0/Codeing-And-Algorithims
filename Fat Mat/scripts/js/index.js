var db = IDBDatabase.prototype;
const importJSON = async (path) => (await fetch(path)).json();

(async () => {
    await new Promise(res => document.addEventListener('DOMContentLoaded', res, { once: true }))
    var dbManifest = await importJSON('./database/manifest.json')
    var crntDBVersion = await importJSON(`./database/versions/${dbManifest.current}.json`)

    const addEntryButton = document.getElementById('add-entry')

    addEntryButton.addEventListener('click', () => alert('Hello World'))

    const dbReq = indexedDB.open("countries", dbManifest.current)

    const res = await Promise.race([
        new Promise(t => dbReq.addEventListener('success', t, { once: true })),
        new Promise(t => dbReq.addEventListener('upgradeneeded', t, { once: true })),
        new Promise(t => dbReq.addEventListener('error', t, { once: true })),
        new Promise(t => dbReq.addEventListener('blocked', t, { once: true }))
    ])

    db = dbReq.result
    switch (res.type) {
        case 'upgradeneeded':
            console.log(res)
            var transaction = res.target.transaction
            var crntDBPropities = crntDBVersion.propities.map((t, i) => [t.name, i])
            var objectStoresToDelete = Array.from(db.objectStoreNames).filter(t => !crntDBPropities.includes(t))

            crntDBPropities.forEach(([name, i]) => {
                if (!Array.from(db.objectStoreNames).includes(name)) {
                    db.createObjectStore(name)
                }
                var objectStore = transaction.objectStore(name)
                var objectInfo = crntDBVersion.propities[i]
                var toDelete = []
                var toAdd = objectInfo.propities
                var objectStorePropities = Array.from(objectStore.indexNames)
                for (let i = 0; i < objectStorePropities.length; i++) {
                    if (objectInfo.propities.includes(objectStorePropities[i])) {
                        toAdd.slice(toAdd.findIndex(t => t == objectStorePropities[i]), 1)
                    } else {
                        toDelete.push(objectStorePropities[i])
                    }
                }

                toDelete.forEach(t => objectStore.deleteIndex(t))
                toAdd.forEach(t => objectStore.createIndex(t, t, { unique: false }))
            })

            objectStoresToDelete.forEach(t => db.deleteObjectStore(t))
            transaction.commit()
        case 'success':

            break;
        default:
            console.log(res)
            alert('Garbage can better tha your computor')
            return;
    }
})();

