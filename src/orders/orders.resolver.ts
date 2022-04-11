import { Args, Query, ResolveProperty, Resolver } from '@nestjs/graphql'
import { RetailService } from '../retail_api/retail.service'
import { OrdersResponse } from '../graphql'

@Resolver('Orders')
export class OrdersResolver {
  constructor(private retailService: RetailService) {}

  @Query()
  async getOrders(@Args('page') page: number) {
    const [orders, pagination] = await this.retailService.orders({ page })
    console.log(orders)
    return { orders, pagination }
  }

  @Query()
  async order(@Args('number') id: string) {
    return this.retailService.findOrder(id)
  }
}
