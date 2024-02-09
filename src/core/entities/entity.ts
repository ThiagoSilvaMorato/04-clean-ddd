import { randomUUID } from "node:crypto";
import { UniqueEntityID } from "./unique-entity-id";

export class Entity<Props> {
  private _id: UniqueEntityID;
  protected props: Props;

  get id() {
    return this._id;
  }

  constructor(props: any, id?: string) {
    this._id = new UniqueEntityID(id);
    this.props = props;
  }
}
