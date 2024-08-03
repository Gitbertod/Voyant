"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button, Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import {
  HiChartPie,
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
      <div className="flex min-h-[50vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)} className="bg-amber-400"><RxHamburgerMenu /></Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Drawer" />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/nosotros" icon={HiChartPie}>
                      Nosotros
                    </Sidebar.Item>
                    <Sidebar.Item href="/soluciones" icon={HiShoppingBag}>
                      Soluciones
                    </Sidebar.Item>
                    <Sidebar.Item href="/sectores" icon={HiUsers}>
                      Sectores
                    </Sidebar.Item>   
                    <Sidebar.Item href="/voyant365" icon={HiCollection}>
                      Voyant 365
                    </Sidebar.Item>
                    <Sidebar.Item href="contacto" icon={HiInformationCircle}>
                      Contacto
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
