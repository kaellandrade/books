type TreeNode = {
	value: string;
};

type LeafNode = TreeNode & {
	isLeaf: true;
};

type InnerNode = TreeNode & {
	children: [TreeNode] | [TreeNode, TreeNode];
};

let aa: TreeNode = { value: 'a' };
let bb: LeafNode = { value: 'b', isLeaf: true };
let cc: InnerNode = { value: 'c', children: [bb] };

const mapNode = <T extends TreeNode>( // T o limite TreeNode, ou seja pode ser TreeNode ou seus subtipos (LeafNode,InnerNode)
	node: T, // TreeNode ou subtipos são permitidos, apenas
	f: (value: string) => string
): T => ({
	// Retorna um TreeNode ou algum subtipo
	...node,
	value: f(node.value),
});

let a1 = mapNode(aa, _ => _.toUpperCase()); // TreeNode
let b1 = mapNode(bb, _ => _.toUpperCase()); // LeafNode
let c1 = mapNode(cc, _ => _.toUpperCase()); // InnerNode

console.log(aa);
console.log(a1);
