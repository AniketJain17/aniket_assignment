import { init } from "snabbdom";
import { h, propsModule, eventListenersModule, styleModule } from "snabbdom";

const patch = init([propsModule, eventListenersModule, styleModule]);

let state = {
  count: 0,
};

let vnode = null;

function Template(state) {
  return h(
    "div",
    {
      style: {
        backgroundColor: "",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    [
      h(
        "div",
        {
          style: {
            background: "rgb(241, 248, 253)",
            boxShadow: "0 8px 32px 0 rgb(144, 12, 39 , 0.50 )",
            backdropFilter: "blur( 2px )",
            webkitBackdropFilter: "blur( 4px )",
            borderRadius: "25px",
            border: "1px solid rgb(142, 122, 181, 0.58)",
            width: "280px",
            height: "280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        },
        [
          h(
            "h1",
            {
              style: {
                fontSize: "48px",
                color: "black",
              },
            },
            state.count
          ),
          h(
            "button",
            {
              style: {
                background: "rgb(56, 65, 157)",
                boxShadow: "0px 6px 102px rgb(199, 0, 57,0.37)",
                height: "30px",
                width: "100px",
                color: "black",
                border: "none",
                borderRadius: "99px",
                marginBottom: "14px",
              },
              on: {
                click: increment,
              },
            },
            "Add"
          ),
        ]
      ),
    ]
  );
}



function updateState(newState) {
  state = { ...state, ...newState };
  render();
}

//Increasing the count value.
function increment() {
  updateState({ count: state.count + 1 });
  console.log("Mounted");
}

function render() {
  const newVNode = Template(state);
  if (vnode === null) {
    vnode = newVNode;
    patch(document.getElementById("root"), vnode);
  } else {
    patch(vnode, newVNode);
    vnode = newVNode;
  }
}

export const mount = () => {
  console.log("Component mounted");
  render();
};

export const useEffect = (effect) => {
  effect();
};
