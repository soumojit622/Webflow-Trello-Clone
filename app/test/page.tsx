import React from "react"
import { Button } from "@/components/ui/button" // adjust the path if needed
import { Plus, Trash2, ArrowRight } from "lucide-react" // icons for demo

const TestPage = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Button Variants</h1>

      {/* Default */}
      <div className="flex flex-wrap gap-4">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <h1 className="text-2xl font-bold">Button Sizes</h1>
      <div className="flex flex-wrap gap-4">
        <Button size="sm" variant="default">
          Small
        </Button>
        <Button size="default" variant="default">
          Default
        </Button>
        <Button size="lg" variant="default">
          Large
        </Button>
        <Button size="icon" variant="default">
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <h1 className="text-2xl font-bold">Buttons with Icons</h1>
      <div className="flex flex-wrap gap-4">
        <Button variant="default">
          <Plus className="w-4 h-4" />
          Add Item
        </Button>
        <Button variant="destructive">
          <Trash2 className="w-4 h-4" />
          Delete
        </Button>
        <Button variant="outline">
          Next
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

export default TestPage
