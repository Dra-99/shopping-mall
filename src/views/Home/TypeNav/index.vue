<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort" @click="toSearch">
        <div class="all-sort-list2">
          <div class="item" :class="curHoverIdx === item.categoryId ? 'active' : null" v-for="item in categoryList" :key="item.categoryId" @mouseenter="mouseEnter(item.categoryId)" @mouseleave="mouseOut">
            <h3>
                <a :data-category_name="item.categoryName" :data-category1_id="item.categoryId">{{item.categoryName}}</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem" v-for="itemChild in item.categoryChild" :key="itemChild.categoryId">
                <dl class="fore">
                  <dt>
                    <a :data-category_name="itemChild.categoryName" :data-category2_id="itemChild.categoryId">{{itemChild.categoryName}}</a>
                  </dt>
                  <dd>
                    <em v-for="itemInsert in itemChild.categoryChild" :key="itemInsert.categoryId">
                      <a :data-category_name="itemInsert.categoryName" :data-category3_id="itemInsert.categoryId">{{itemInsert.categoryName}}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { mapActions, mapState } from "vuex";
import { debounce } from "@/utils/utils.js"
export default {
  name: "TypeNav",
  data() {
    return {
        curHoverIdx: undefined
    }
  },
  methods: {
    ...mapActions("home", ["queryCategoryList"]),
    mouseEnter: debounce(function() {
        console.log(arguments)
        this.curHoverIdx = arguments[0]
    }, 100),
    mouseOut() {
        this.curHoverIdx = undefined
    },
    toSearch(e) {
        const { category_name, category1_id, category2_id, category3_id } = e.target.dataset;
        const query = {
            categoryName: category_name
        }
        if (category1_id) {
            query.category1Id = category1_id
        } else if (category2_id) {
            query.category2Id = category2_id
        } else if (category3_id) {
            query.category3Id = category3_id
        }
        this.$router.push({
            name: 'search',
            query
        })
    }
  },
  computed: {
    ...mapState("home", {
      categoryList: (state) => state.categoryList,
    }),
  },
  mounted() {
    this.queryCategoryList();
  },
};
</script>
 
<style  lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {

            h3 > a {
                text-decoration: none;
            }

            &.active {
                background: rgba(0, 0, 0, 0.3);
                cursor: pointer;
                h3 > a {
                    color: #fff;
                }
            }

          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>