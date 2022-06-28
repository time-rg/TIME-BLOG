import { useState } from "react"
import { Layout, Menu } from "antd"

import "./App.css"

const { Header, Content, Footer } = Layout

function App() {
    const menuArr = [
        { label: "文章", key: "item-1" }, // 菜单项务必填写 key
        { label: "图集", key: "item-2" },
        { label: "X-mind", key: "item-3" }
    ]
    return (
        <Layout>
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={menuArr.map((item) => ({
                        key: item.key,
                        label: item.label
                    }))}
                />
            </Header>
            <Content className="site-layout">
                <div className="site-layout-background">Content</div>
                <div>hahaha</div>
            </Content>
            <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
    )
}

export default App
