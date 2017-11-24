define(function (require) {
    /**
     * IndexedDB 所有的API操作，均为异步模式，需要通过回调函数来获取。
     * 现在浏览器还没实现同步的API
     */

    /**
     * 数据库的操作的构造函数
     * @param {string} dbName 
     * @param {string} tableName 
     */
    function LocalDB(dbName, tableName) {
        this.dbName = dbName;
        this.tableName = tableName;
        this.db = null;
    }
    /**
     * 打开数据库        
     * @param {fn} callback 
     */
    LocalDB.prototype.open = function (callback) {
        var _this = this;
        var request = window.indexedDB.open(_this.dbName);
        
        request.onsuccess = function (event) {
        
            _this.db = request.result;

            callback && callback();
        }

        request.onupgradeneeded = function (event) {
            var db = request.result;

            if (!db.objectStoreNames.contains(_this.tableName)) {
                db.createObjectStore(_this.tableName, {
                    keyPath: 'id',
                    autoIncrement: true
                })
            }
        }
    }

    LocalDB.prototype.getStore = function () {
        var transaction = this.db.transaction(this.tableName, 'readwrite');
        var objStore = transaction.objectStore(this.tableName);
        return objStore;
    }

    LocalDB.prototype.set = function (data, callback) {
        var objStore = this.getStore();
        var request = data.id ? objStore.put(data) : objStore.add(data);
        request.onsuccess = function (event) {
            callback && callback(event.target.result);
        }
    }

    LocalDB.prototype.get = function (id, callback) {
        var objStore = this.getStore();
        var request = objStore.get(id);
        request.onsuccess = function (event) {
            callback && callback(event.target.result);
        }
    }

    LocalDB.prototype.getAll = function (callback) {
        var objStore = this.getStore();

        var request = objStore.openCursor();
        request.onsuccess = function (event) {
            var cursor = event.target.result;
            if (cursor) {
                callback && callback(cursor.value);

                cursor.continues();
            }
        }
    }

    LocalDB.prototype.remove = function (id) {
        var objStore = this.getStore();
        objStore.delete(id);
    }

    return {
        LocalDB: LocalDB
    }
})