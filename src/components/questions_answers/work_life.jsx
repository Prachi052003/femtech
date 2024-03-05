
import React from "react"

import "../../style/work_life.css"

export default function worklife() {
    return (
      <div className="max-w-md mx-auto my-10">
        <div className="mb-6">
          <div className="h-1 w-10 bg-gray-300" />
        </div>
        <h1 className="mb-6 text-xl font-semibold">
          Imagine your life 10-20 years from now. How do you see your work fitting into your ideal lifestyle?
        </h1>
        <form>
          <div className="mb-4">
            <label className="block p-4 w-full border border-gray-300 bg-white">
              <input className="mr-2" name="lifestyle" type="radio" />
              My work provides me with ample personal time to enjoy life
            </label>
          </div>
          <div className="mb-4">
            <label className="block p-4 w-full border border-gray-300 bg-white">
              <input className="mr-2" name="lifestyle" type="radio" />
              I have a balanced lifestyle with equal emphasis on work and personal time
            </label>
          </div>
          <div className="mb-4">
            <label className="block p-4 w-full border border-gray-300 bg-white">
              <input className="mr-2" name="lifestyle" type="radio" />
              My work is my passion and I enjoy devoting a lot of my time to it
            </label>
          </div>
          <div className="mb-4">
            <label className="block p-4 w-full border border-gray-300 bg-white">
              <input className="mr-2" name="lifestyle" type="radio" />
              Not sure
            </label>
          </div>
        </form>
      </div>
    )
  }
  
  