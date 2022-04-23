import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export interface Response<T> {
    statusCode: number;
    message: string;
    data: T;
}
export declare class TransformResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<any>>;
}
