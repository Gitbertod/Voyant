"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button, Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import styles from "./DrawerComponent.module.css";
import { Link } from "react-router-dom";
import {
 
  HiCollection,
  HiInformationCircle,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";

export function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex  items-center justify-center">
        <Button onClick={() => setIsOpen(true)} className="bg-amber-400 p-0">
          <RxHamburgerMenu className={styles.icon} />
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
      <Drawer.Header title="" titleIcon={() => <img src="/logoVoyantColor.svg" className={styles.logoVoyant} alt="Voyant Logo" />} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item  icon={HiUsers}>
                      <Link to="/nosotros">Nosotros</Link>
                    </Sidebar.Item>
                    <Sidebar.Item  icon={HiShoppingBag}>
                      <Link to="/soluciones">Soluciones</Link>
                    </Sidebar.Item>
                    <Sidebar.Item  icon={HiCollection}>
                      <Link to="/sectores">Sectores</Link>
                    </Sidebar.Item>
                    <Sidebar.Item  icon={HiCollection}>
                      <Link to="/voyant365">Voyant 365</Link>      
                    </Sidebar.Item>
                    <Sidebar.Item  icon={HiInformationCircle}>
                      <Link to="/contacto">Contacto</Link>
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
