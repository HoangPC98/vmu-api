"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
exports.multerOptions = {
    limits: {
        fileSize: +process.env.MAX_FILE_SIZE || 10000000,
    },
    fileFilter: (req, file, cb) => {
        if (file.originalname.match(/\.(xls|xlsx|xlsb|csv|xlsm)$/)) {
            cb(null, true);
        }
        else {
            cb(new common_1.HttpException(`Unsupported file type ${(0, path_1.extname)(file.originalname)}`, common_1.HttpStatus.BAD_REQUEST), false);
        }
    },
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            const uploadPath = __dirname + `/../../${process.env.UPLOAD_LOCATION}`;
            if (!(0, fs_1.existsSync)(uploadPath)) {
                (0, fs_1.mkdirSync)(uploadPath);
            }
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            cb(null, `${(0, uuid_1.v4)()}${(0, path_1.extname)(file.originalname)}`);
        },
    }),
};
//# sourceMappingURL=multer.config.js.map