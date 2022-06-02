import { Role } from 'src/dataTypes/enum.types';
export declare class SignUpDto {
    username: string;
    password: string;
    ho_ten: string;
    email: string;
    user_type?: Role;
    ngay_sinh: string;
}
