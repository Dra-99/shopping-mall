import Mock from "mockjs"
import banner from "./banner.json"
import floor from "./floor.json"

Mock.mock('/api/mock/banner', { code: 200, data: banner })
Mock.mock('/api/mock/floor', { code: 200, data: floor })