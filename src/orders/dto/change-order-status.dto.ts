import { IsEnum, IsUUID } from 'class-validator';
import { orderStatusList } from '../enum/order.enum';
import { OrderStatus } from '@prisma/client';

export class ChangeOrderStatusDto {
  @IsUUID()
  id: string;

  @IsEnum(orderStatusList, { message: `Valid status are ${orderStatusList}` })
  status: OrderStatus;
}
