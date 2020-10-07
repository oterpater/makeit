const tree = {
  value: 75,
  left: {
    value: 95,
    left: {
      value: 17,
      left: {
        value: 18,
        left: null,
        right: null
      },
      right: {
        value: 35,
        left: null,
        right: null
      }
    },
    right: {
      value: 47,
      left: {
        value: 35,
        left: null,
        right: null
      },
      right: {
        value: 87,
        left: null,
        right: null
      }
    }
  },
  right: {
    value: 64,
    left: {
      value: 47,
      left: {
        value: 35,
        left: null,
        right: null
      },
      right: {
        value: 87,
        left: null,
        right: null
      }
    },
    right: {
      value: 82,
      left: {
        value: 87,
        left: null,
        right: null
      },
      right: {
        value: 10,
        left: null,
        right: null
      }
    }
  }
};

const maxPathSum = function(tree){
  if(!tree.left && !tree.right){
    return tree.value;
  };

  const maxLeft = maxPathSum(tree.left);
  const maxRight = maxPathSum(tree.right);

  return tree.value + Math.max(maxLeft,maxRight);
};

console.log(maxPathSum(tree));