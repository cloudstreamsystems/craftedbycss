"use client";

import { useState } from "react";

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
    const [key, setKey] = useState(0);

    return (
        <div className="w-full h-full flex items-center justify-center p-4 md:p-6">
            <Code code={nmapOutput} className="w-full shadow-2xl bg-[#0f172a] border border-white/10 rounded-xl overflow-hidden ring-1 ring-white/5">
                <CodeHeader className="bg-[#1e293b] border-b border-white/10 text-gray-400 h-12 flex items-center px-4">
                    <div className="flex gap-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium font-mono opacity-80 ml-auto mr-auto transform -translate-x-6">
                        <Terminal className="w-4 h-4" />
                        <span>nmap scan</span>
                    </div>
                </CodeHeader>
                <CodeBlock
                    key={key}
                    className="h-[250px] md:h-[300px] font-mono text-xs md:text-sm p-6 overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20"
                    cursor={true}
                    lang="bash"
                    theme="dark"
                    writing={true}
                />
            </Code>
        </div>
    );
}
