
import NCClient from "./ncClient";

export default class NCTag {
    public id: string;
    public idNumber: number;
    public name: string;
    private client: NCClient;
    constructor(client: NCClient, id: string, name: string) {
        this.client = client;
        this.name = name;
        this.id = id;
        // the number id of the tag is the last element in the id (path)
        this.idNumber = parseInt(this.id.split("/")[this.id.split("/").length - 1], 10);
    }
    public async delete(): Promise<void> {
        return this.client.deleteTag(this.id);
    }
    public toString(): string {
        return "id:" + this.id + " name:" + this.name;
    }

}
