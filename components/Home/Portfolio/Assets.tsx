/* This example requires Tailwind CSS v2.0+ */
const assets = [
  {
    name: 'uniswap-v3',
    notes: 'ethereum',
    value: '9729',
    hide: true,
    img:
    'https://storage.googleapis.com/zapper-fi-assets/apps/uniswap-v3.png',
    chain: 'ethereum',
    type: '',
    contract: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    amount: '9729.555973775874',
  },
]

export default function Assets() {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-black">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Asset
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Balance
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="bg-black divide-y divide-gray-200">
                {assets.map((assets) => (
                  <tr key={assets.name}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={assets.img} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{assets.name}</div>
                          <div className="text-xs text-gray-300">{assets.chain}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white">{assets.value}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white">{assets.value}</div>                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{assets.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
