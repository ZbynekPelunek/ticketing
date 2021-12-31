import { Publisher, Subjects, OrderCancelledEvent } from '@minuslevel/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}