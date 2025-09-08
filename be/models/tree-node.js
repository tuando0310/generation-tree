const mongoose = require('mongoose');

const treeNodeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'TreeNode', default: null }, // Reference to parent node
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TreeNode' }] // Array of child node IDs
});

module.exports = mongoose.model('TreeNode', treeNodeSchema);