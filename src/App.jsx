import "./global.css"
import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

function App() {
  return (
    <div className="p-4">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">

          {/* Home */}
          <NavigationMenuItem>
            <NavigationMenuLink className="px-3 py-2 rounded hover:bg-gray-100">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Report Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-3 py-2 rounded hover:bg-gray-100">
              Report
            </NavigationMenuTrigger>
            <NavigationMenuContent className="p-4 bg-white border rounded shadow-lg mt-1">
              <ul className="grid gap-2">
                <NavigationMenuLink className="px-3 py-2 rounded hover:bg-gray-100">
                  Create Reports
                </NavigationMenuLink>
                <NavigationMenuLink className="px-3 py-2 rounded hover:bg-gray-100">
                  All Reports
                </NavigationMenuLink>
                <NavigationMenuLink className="px-3 py-2 rounded hover:bg-gray-100">
                  Your Reports
                </NavigationMenuLink>
                <NavigationMenuLink className="px-3 py-2 rounded hover:bg-gray-100">
                  Map
                </NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Map */}
          <NavigationMenuItem>
            <NavigationMenuLink className="px-3 py-2 rounded hover:bg-gray-100">
              Map
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default App
