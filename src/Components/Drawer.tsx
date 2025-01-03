
"use client";

import { Button, Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import {
  HiChartPie,
  HiLogin,
  HiPencil,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import { useAppContext } from "../Context/AppContext";

export function SideDrawer() {
  const {openDrawer, setOpenDrawer } = useAppContext();
  const handleClose = () => setOpenDrawer(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={handleClose}>
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>

                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={HiChartPie}>
                      Tribes
                    </Sidebar.Item>
                    <Sidebar.Item href="/e-commerce/products" icon={HiShoppingBag}>
                      What's On
                    </Sidebar.Item>
                    <Sidebar.Item href="/users/list" icon={HiUsers}>
                      Messages
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                      Notifications
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
                      Profile
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
