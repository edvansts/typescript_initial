import { Request, Response } from "express";
import CreateUser from "./services/CreateUser"

/** 
 * string, number, boolean, object, Array
 * interface
*/
export function helloWorld(request: Request, response: Response) {
    const user = CreateUser({
        email: 'edvanstt05@gmail.com',
        password: 123456,
        name: 'Edvan',
        techs: ['Node-js',
        'React', 
        'React-Native',
        { title: 'JavaScript', experience: 100}
    ]
    })
  return response.json({ message: user });
}
