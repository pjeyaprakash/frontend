import {ProtoClient} from 'ps-protobuf-client'


export const api = new ProtoClient({
  baseURL: "http://localhost:8080"
});