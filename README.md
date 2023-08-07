# Dynamic Challenge Instance Demo

Demo of a dynamic challenge instance module for CTFd.

## Usage

```shell
docker compose up
deno run --allow-net test.ts
```

## TODO

- [ ] Implement dynamic generation of challenge instances

## Architecture

```mermaid
graph LR

subgraph Client
    Test[test.ts]
end

subgraph Docker Environment
    subgraph Proxy Service
        DockerProxy[Dockerfile]
        ProxyCode[main.ts]
    end

    subgraph Vulnerability Service
        DockerVuln[Dockerfile]
        VulnCode[main.ts]
    end
    
    ComposeConfig[docker-compose.yml]
end

ProxyCode <--> VulnCode
Test <--> ProxyCode
```
