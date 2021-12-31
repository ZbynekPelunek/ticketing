import { Subjects, Publisher, PaymentCreatedEvent } from "@minuslevel/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
}