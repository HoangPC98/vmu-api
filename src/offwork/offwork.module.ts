import { Module } from '@nestjs/common';
import { OffworkService } from './offwork.service';
import { OffworkController } from './offwork.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offwork } from '../database/entities/offwork.entity';
import { Review } from '../database/entities/review.entity';
import { CaslModule } from 'src/casl/casl.module';

@Module({
  imports: [TypeOrmModule.forFeature([Offwork, Review]), CaslModule],
  controllers: [OffworkController],
  providers: [OffworkService],
})
export class OffworkModule {}
