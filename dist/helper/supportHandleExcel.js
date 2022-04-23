"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCheckinout = exports.arrCheckout = void 0;
exports.arrCheckout = [
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
];
const convertCheckinout = (dateString) => {
    if (!dateString)
        return null;
    const date = dateString.split(' ')[0];
    const time = dateString.split(' ')[1];
    const year = date.split('/')[2];
    const month = date.split('/')[0];
    const day = date.split('/')[1];
    const hh = time.split(':')[0];
    const mm = time.split(':')[1];
    const ss = time.split(':')[2];
    return new Date(year, month, day, hh, mm, ss);
};
exports.convertCheckinout = convertCheckinout;
//# sourceMappingURL=supportHandleExcel.js.map