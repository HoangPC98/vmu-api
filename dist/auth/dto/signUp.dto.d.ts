import { Role } from 'src/database/entities/phan_quyen.entity';
export declare class SignUpDto {
    username: string;
    password: string;
    ho_ten: string;
    email: string;
    user_type: Role;
}
