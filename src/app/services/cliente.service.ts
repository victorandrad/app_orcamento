import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';


@Injectable()
export class ClienteService {

    constructor(
        private storage: Storage
    ) { }

    index() {
        return new Promise((resolve, reject) => {
            this.storage.get('clientes').then(response => {
                resolve(response);
            });
        })
    }

    store(params) {
        return new Promise(async (resolve, reject) => {
            let paramsArray = [];

            await this.storage.get('clientes').then((response: any) => {
                paramsArray = response ?? [];
                params.id = paramsArray.length > 0 
                    ? paramsArray[paramsArray.length - 1].id + 1 
                    : 1;
                paramsArray.push(params);
            });

            this.storage.set('clientes', paramsArray).then(response => {
                resolve(response);
            });
        })
    }

    update(params) {
        return new Promise(async (resolve, reject) => {
            let paramsArray = [];

            await this.storage.get('clientes').then(response => {
                for (let r in response) {
                    if (response[r].id == params.id) {
                        response[r] = params;
                    }
                    paramsArray.push(response[r]);
                }
            });
            
            this.storage.set('clientes', paramsArray).then(response => {
                resolve(response);
            });
        })
    }

    delete(params) {
        return new Promise(async (resolve, reject) => {
            let paramsArray = [];

            await this.storage.get('clientes').then(async (response: any) => {
                paramsArray = response.filter(res => {
                    return res.id != params.id;
                });

                this.storage.set('clientes', paramsArray).then(response => {
                    resolve(response);
                });
            });
        })
    }
}