export default function Context() {
  return (
    <>
      {/* Context Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="fa fa-usd text-black"></span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue Sharing</h3>
            <p className="text-gray-600">Innovative compensation models that align success with growth.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="fas fa-bolt text-red-500"></span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Engine</h3>
            <p className="text-gray-600">Powerful tools to amplify your recruitment reach and impact.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="fas fa-users text-red-300"></span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Broker Community</h3>
            <p className="text-gray-600">Competitive environment that drives excellence and collaboration.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="fas fa-lightbulb text-red-500"></span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Learning</h3>
            <p className="text-gray-600">Intelligent platform that adapts and grows with your team.</p>
          </div>
        </div>
      </section>
    </>
  );
}
