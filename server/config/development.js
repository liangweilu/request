var config = {
    enableCompression: false,
    database         : {
        username: 'root',
        password: '',
        host    : 'localhost',
        dialect : 'mysql', //'mysql' | 'mariadb' | 'sqlite' | 'postgres' | 'mssql',
        pool    : {
            max : 5,
            min : 0,
            idle: 10000
        },
        // SQLite only
        storage : 'data/database.sqlite',
        logging : true
    },
    logger           : {
        level        : "info",
        dirName      : "logs", // e.g. /mnt/wtlog/nodejs/web
        filename     : "",
        errorFileName: "",
        maxsize      : 1024 * 1024 * 10
    }
};

module.exports = exports = config;
