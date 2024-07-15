import { IsEnum, IsOptional } from 'class-validator';
import { orderStatusList } from '../enum/order.enum';
import { PaginationDto } from '../../common';
import { OrderStatus } from '@prisma/client';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(orderStatusList, {
    message: `Status must be one of ${orderStatusList.map((status) => status)}`,
  })
  status?: OrderStatus;
}
