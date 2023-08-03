import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/index.vue";
import Login from "@/views/login/index.vue";
import Home from "@/views/home/home.vue";
const Product = () => import("@/views/product/product.vue"); //产品管理
const Producty = () => import("@/views/product/producty/producty.vue"); //产品分类
const List = () => import("@/views/product/list/list.vue"); //产品列表
const Order = () => import("@/views/order/order.vue"); // 订单管理
const Orderlist = () => import("@/views/order/orderlist/orderlist.vue"); //订单管理
const Summarylist = () => import("@/views/order/summarylist/summarylist.vue"); //汇总清单
const Orderreview = () => import("@/views/order/orderreview/orderreview.vue");
// 订单审核
const Advent = () => import("@/views/advent/advent.vue"); //广告分类
const Advertisinglist = () =>
  import("@/views/advent/advertisinglist/advertisinglist.vue"); //广告列表
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "/", nmae: "home", component: Home },
      {
        path: "/product",
        name: "product",
        component: Product,
        children: [
          { path: "list", name: "list", component: List },
          { path: "producty", name: "producty", component: Producty },
        ],
      },
      {
        path: "/order",
        name: "order",
        component: Order,
        children: [
          { path: "orderlist", name: "orderlist", component: Orderlist },
          { path: "summarylist", name: "summarylist", component: Summarylist },
          { path: "orderreview", name: "orderreview", component: Orderreview },
        ],
      },
      {
        path: "/advent",
        name: "advent",
        component: Advent,
        children: [
          {
            path: "advertisinglist",
            name: "advertisinglist",
            component: Advertisinglist,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
