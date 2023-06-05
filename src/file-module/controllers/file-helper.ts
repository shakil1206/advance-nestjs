// import { extname } from "path";

export const imagefilefilter = (req: any, file: any, callback: any) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        req.fileValidationError = 'Only image files allowed';
        // return callback(new Error('Only Image files are allowed!'), false);
        return callback(null, false)
    }
    callback(null, true);
}

// export const editFileName = (req: any, file, callback) => {
//     const name = file.originalName.split('.')[0];
//     const fileExtName = extname(file.originalName);
//     const randomName = Array(4)
//         .fill(null)
//         .map(() => Math.round(Math.random() * 16).toString(16))
//         .join('');
//     callback(null, `${name}-${randomName}${fileExtName}`)

// }