import React from 'react'
import { XIcon } from 'lucide-react'
function AddressForm({ resetForm, handleSubmit, form, setForm, editingId }) {
  return (
    <>
      {/* overLay */}
      <div className='fixed inset-0 bg-black/40 z-50' />

      {/* form container */}
      <div onClick={resetForm} className="fixed inset-0 z-50 flex-center p-4">
        <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} className="bg-white rounded-2xl p-2 w-full max-w-lg animate-fase-in">
          {/* form Header */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold h=justify-between mb-5">
              {editingId ? "Edit Address" : "Add New Address"}
            </h2>
            <button type='button' onClick={resetForm} className="p-2 hover:bg-app-cream rounded-lg">
              <XIcon className='size-5' />
            </button>
          </div>
          {/* from inputFields */}
          <div className='space-y-4'>
            <div className='p-2'>
              <label className='block text-sm font-medium text-app-green mb-1.5 ml-1' >Label</label>
              <input type="text" placeholder='Home, Work, etc.'
                className='w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none'
                value={form.label} onChange={(e) => setForm(prev => ({ ...prev, label: e.target.value }))}
                required
              />
            </div>

            <div className='p-2'>
              <label className='block text-sm font-medium text-app-green mb-1.5 ml-1' >Street Address</label>
              <input type="text"
                className='w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none'
                value={form.address} onChange={(e) => setForm(prev => ({ ...prev, address: e.target.value }))}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {/* city */}
              <div className='p-2'>
                <label className='block text-sm font-medium text-app-green mb-1.5 ml-1' >City</label>
                <input type="text"
                  className='w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none'
                  value={form.city} onChange={(e) => setForm(prev => ({ ...prev, city: e.target.value }))}
                  required
                />
              </div>
              {/* state */}
              <div className='p-2'>
                <label className='block text-sm font-medium text-app-green mb-1.5 ml-1' >State</label>
                <input type="text"
                  className='w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none'
                  value={form.state} onChange={(e) => setForm(prev => ({ ...prev, state: e.target.value }))}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {/* zipCode */}
              <div className='p-2'>
                <label className='block text-sm font-medium text-app-green mb-1.5 ml-1' >Zip</label>
                <input type="text"
                  className='w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none'
                  value={form.zip} onChange={(e) => setForm(prev => ({ ...prev, zip: e.target.value }))}
                  required
                />
              </div>
              {/* isDefault CheckBox */}
              <div className='flex items-end pb-1'>
                <label className='flex items-center gap-2 cursor-pointer' >

                  <input type="checkbox" checked={form.isDefault} onChange={(e) => setForm(prev => ({ ...prev, isDefault: e.target.checked }))} />
                  <span className='text-sm text-app-text'>Set as default</span>
                </label>
                
              </div>
            </div>
          </div>

          {/* submit button */}
          <button type='submit' className="mt-6 w-full py-3 bg-app-green text-white font-semibold rounded-xl hover:bg-app-green-light transition-colors">
            {editingId ? "Update Address" : "Save Address"}
          </button>
        </form>
      </div>
    </>
  )
}

export default AddressForm