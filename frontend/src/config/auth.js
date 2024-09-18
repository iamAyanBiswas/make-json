import config from "./config";
import { nanoid } from "nanoid"
class Auth {
    constructor(path, requestType, newNoOfCopy, newData) {
        this.path = path
        this.requestType = requestType
        this.newNoOfCopy = newNoOfCopy
        this.newData = newData
    }

    async fetchData() {
        let endPoint = config.endPoint + this.path
        // endPoint = 'http://localhost:3000' + this.path
        // let endPointKey = nanoid(10) + config.endPointKey + nanoid(30)
        let newPath = String(endPoint)
        let newRequestType = String(this.requestType).toUpperCase()
        let noOfCopy = this.newNoOfCopy
        let data = this.newData
        const headers = new Headers({
            'Content-Type': 'application/json',
        });

        if (newRequestType == "GET" || newRequestType == "POST" || newRequestType == "PUT" || newRequestType == "DELETE") {
            try {
             
                let res = await fetch(newPath, {
                    method: newRequestType,
                    headers:headers,
                    body: JSON.stringify({ noOfCopy, data })
                })
                let jsonResponse = await res.json()
                return jsonResponse
            }
            catch (e) { 
                return e
             }
        }
        else {
            throw new Error(`Enter valid requestType to request '${newRequestType}' this ${newPath} path`);
        }
    }
}
export default Auth