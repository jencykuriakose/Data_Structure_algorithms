class Graph{
    constructor(){
        this.adjacencyList={}
    }
    addvertex(vertex){
        if(!this.adjacencyList[vertex]){
         this.adjacencyList[vertex]=new Set()
        }
    }
    addEdges(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addvertex(vertex1); 
        }
        if (!this.adjacencyList[vertex2]) {
            this.addvertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }
    
    deleteEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+"->"+[...this.adjacencyList[vertex]]);
        }
    }
    deletevertex(vertex){
        if(!this.adjacencyList[vertex]){
            return null
        }
        for(let adjacentvertex in this.adjacentvertex){
            this.deleteEdge(vertex,adjacentvertex)
        }
        delete this.adjacencyList[vertex]
    }
    dfs(startIndex,visited={}){
        if(!this.adjacencyList[startIndex]){
            return
        }
        console.log(startIndex);
        visited[startIndex]=true
        for(let neighbor of this.adjacencyList[startIndex]){
            if(!visited[neighbor]){
                this.dfs(neighbor,visited)
            }
        }
    }
    bfs(startvertex){
        const queue=[startvertex];
        const visited={[startvertex]:true};
        while(queue.length>0){
            const currentvertex=queue.shift();
            console.log(currentvertex);
            for(const neighbor of this.adjacencyList[currentvertex]){
                if(!visited[neighbor]){
                    visited[neighbor]
                    queue.push(neighbor);

                }
            }
        }
    }
}
const graph=new Graph()
graph.addEdges("A","B")
graph.addEdges("D","C")
graph.addEdges("B","A")
graph.display()
console.log("dfs");
graph.dfs("C");
