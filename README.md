# Node.js Server Not Accessible from Other Machines

This repository contains a simple Node.js HTTP server that is not accessible from other machines. The server is only listening on the local network interface. To make the server accessible from other machines, you need to specify the IP address to listen on. This can be done by passing the IP address as the first argument to the `listen` method.

## Bug

The bug is that the server is only listening on the local network interface. This means that the server is only accessible from machines on the same network.

## Solution

The solution is to specify the IP address to listen on. This can be done by passing the IP address as the first argument to the `listen` method. The IP address `0.0.0.0` will make the server listen on all interfaces.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `node bug.js`.
4. Try to access the server from another machine using the public IP address.
5. The connection will be refused.

## How to fix

1. Edit `bug.js` to add the IP address as the first argument to the `listen` method.
2. Run `node bugSolution.js`.
3. The server should now be accessible from other machines.

## Contact

If you have any questions, please contact me at [your email address].