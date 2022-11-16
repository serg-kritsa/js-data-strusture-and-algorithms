class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
}


function removeGraphDemo() {
    let g = new Graph();
    g.addVertex("Dallas");
    g.addVertex("Tokyo");
    g.addVertex("Aspen");
    // {
    //     "Aspen": [],
    //     "Dallas": [],
    //     "Tokyo": [],
    // }
    g.addEdge("Dallas", "Aspen");
    // {
    //     "Aspen": ["Dallas"],
    //     "Dallas": ["Aspen"],
    //     "Tokyo": [],
    // }
    g.addEdge("Dallas", "Tokyo");
    // {
    //     "Aspen": ["Dallas"],
    //     "Dallas": ["Aspen", "Tokyo"],
    //     "Tokyo": ["Dallas"],
    // }
    g.removeEdge("Dallas", "Aspen");
    // {
    //     "Aspen": [],
    //     "Dallas": ["Tokyo"],
    //     "Tokyo": ["Dallas"],
    // }
}

function removeGraphVertexDemoV1() {
    let g = new Graph();
    g.addVertex("Dallas");
    g.addVertex("Tokyo");
    g.addVertex("Aspen");
    g.addEdge("Dallas", "Tokyo");
    g.addEdge("Dallas", "Aspen");
    g.addEdge("Tokyo", "Aspen");
    // {
    //     Aspen: ["Dallas", "Tokyo"],
    //     Dallas: ["Tokyo", "Aspen"],
    //     Tokyo: ["Dallas", "Aspen"],
    // }
    g.removeVertex("Tokyo");
    // {
    //     Aspen: ["Dallas"],
    //     Dallas: ["Aspen"],
    // }
}

function removeGraphVertexDemoV2() {
    let g = new Graph();
    g.addVertex("Dallas");
    g.addVertex("Tokyo");
    g.addVertex("Aspen");
    g.addVertex("Los Angeles");
    g.addVertex("Hong Kong")
    g.addEdge("Dallas", "Tokyo");
    g.addEdge("Dallas", "Aspen");
    g.addEdge("Hong Kong", "Tokyo");
    g.addEdge("Hong Kong", "Dallas");
    g.addEdge("Los Angeles", "Hong Kong");
    g.addEdge("Los Angeles", "Aspen");
    g.removeVertex("Hong Kong");
}

// use any debugger to inspect
// removeGraphEdgeDemo();
removeGraphVertexDemoV1();
// removeGraphVertexDemoV2();






