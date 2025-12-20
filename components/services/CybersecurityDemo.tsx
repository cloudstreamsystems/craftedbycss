"use client";

import { Code, CodeBlock, CodeHeader } from "@/components/animate-ui/components/animate/code";
import { Terminal } from "lucide-react";

const nmapOutput = `Starting Nmap 7.94 ( https://nmap.org )
Nmap scan report for target-system.local (192.168.1.10)
Host is up (0.0024s latency).
Not shown: 996 closed tcp ports (reset)
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.5 (Ubuntu Linux; protocol 2.0)
80/tcp   open  http    nginx 1.18.0 (Ubuntu)
443/tcp  open  ssl/http nginx 1.18.0 (Ubuntu)
8080/tcp open  http-proxy
|_http-title: Site is running
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Nmap done: 1 IP address (1 host up) scanned in 6.42 seconds`;

export default function CybersecurityDemo() {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <Code code={nmapOutput} className="w-full max-w-lg shadow-2xl bg-[#1e1e1e] border-gray-800">
                <CodeHeader icon={Terminal} className="bg-[#2d2d2d] border-gray-700 text-gray-300">
                    nmap scan
                </CodeHeader>
                <CodeBlock
                    className="h-[300px] text-green-400 font-mono text-xs md:text-sm"
                    cursor={true}
                    lang="bash"
                />
            </Code>
        </div>
    );
}
