import { Subjects, Publisher, ExpirationCompleteEvent } from "@minuslevel/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;
}