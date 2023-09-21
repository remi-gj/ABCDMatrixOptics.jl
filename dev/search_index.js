var documenterSearchIndex = {"docs":
[{"location":"elements/#Elements","page":"Elements","title":"Elements","text":"","category":"section"},{"location":"elements/","page":"Elements","title":"Elements","text":"Elements or Vector{<:Elements} can be also compare with ≈.","category":"page"},{"location":"elements/","page":"Elements","title":"Elements","text":"FreeSpace\nThinLens\nThickLens\nMirror\nInterface\nABCDMatrixOptics.dz\nBase.isapprox","category":"page"},{"location":"elements/#ABCDMatrixOptics.FreeSpace","page":"Elements","title":"ABCDMatrixOptics.FreeSpace","text":"FreeSpace(dz)\n\nConstruct a free space propagation over distance dz.\n\n\n\n\n\n","category":"type"},{"location":"elements/#ABCDMatrixOptics.ThinLens","page":"Elements","title":"ABCDMatrixOptics.ThinLens","text":"ThinLens(f)\n\nCreates a thin lens with focal length f.\n\n\n\n\n\nThinLens(R1, R2, n_lens, n)\n\nCreates a thin lens defined by the first radius of curvature R1, the second R2. The lens refractive index is n_lens and the outer refractive index is n.\n\n\n\n\n\n","category":"type"},{"location":"elements/#ABCDMatrixOptics.ThickLens","page":"Elements","title":"ABCDMatrixOptics.ThickLens","text":"ThickLens(;  R1, R2, t, n_lens=1.5 n1=1.0, n2=1.0)\n\nConstruct a thick lens with the keywords:\n\nR1 radius of curvature of first surface\nR2 radius of curvature of second surface\nt: thickness of lens\nn_lens=1.5 refractive index of lens\nn1=1: refractive index of the medium of the incoming side\nn2=1: refractive index of the medium of the exiting side\n\n\n\n\n\n","category":"type"},{"location":"elements/#ABCDMatrixOptics.Mirror","page":"Elements","title":"ABCDMatrixOptics.Mirror","text":"Mirror(R=Inf)\n\nMirror with radius of curvature R. Per default Inf, so a flat mirror.\n\n\n\n\n\n","category":"type"},{"location":"elements/#ABCDMatrixOptics.Interface","page":"Elements","title":"ABCDMatrixOptics.Interface","text":"Interface(n1, n2)\n\nCreates a flat interface with refractive index n1 on the entering side and n2 on the new medium.\n\n\n\n\n\nInterface(n1, n2, R)\n\nCreates a curved interface with radius R and with refractive index n1 on the entering side and n2 on the new medium.\n\n\n\n\n\n","category":"type"},{"location":"elements/#ABCDMatrixOptics.dz","page":"Elements","title":"ABCDMatrixOptics.dz","text":"dz(element::Element)\n\nReturns how much an element changes the optical distance z.\n\n\n\n\n\n","category":"function"},{"location":"elements/#Base.isapprox","page":"Elements","title":"Base.isapprox","text":"Base.isapprox(a::Vector{<:Element}, b::Vector{<:Element})\n\nCompare two vectors of elements using Base.isapprox for each element's ray matrix (ABCD entries). Does consequently not consider one discretization of element FreeSpace different from another, or one realization of an imaging system from another as long as both achieve (within tolerances) the same imaging.\n\nnote: Note\nThe atol (absolute tolerance) parameter can be used but is typically nonsensical as it will be used for each of the ray matrix entries ABCD which usually differ vastly in magnitude.\n\n\n\n\n\n","category":"function"},{"location":"basics/#Basic-Functions","page":"Essential Functions","title":"Basic Functions","text":"","category":"section"},{"location":"basics/","page":"Essential Functions","title":"Essential Functions","text":"propagate\ntrace\ntransfer_matrix","category":"page"},{"location":"basics/#ABCDMatrixOptics.propagate","page":"Essential Functions","title":"ABCDMatrixOptics.propagate","text":"propagate(e::Union{Element, Vector{<:Element}}, b)\n\nPropagate a beam b either by a single element e::Element or Vector{<:Element}.\n\nReturn is the final beam. Also available as e * b.\n\nExample\n\njulia> beam = FreeSpace(10) * GeometricBeam(w=10.0, k=1.0)\nGeometricBeam{Float64}(20.0, 1.0, 10.0)\n\njulia> beam = [ThinLens(10), FreeSpace(10)] * GeometricBeam(w=10.0, k=0.0)\nGeometricBeam{Float64}(0.0, -1.0, 10.0)\n\njulia> beam.w ≈ 0\ntrue\n\n\n\n\n\n","category":"function"},{"location":"basics/#ABCDMatrixOptics.trace","page":"Essential Functions","title":"ABCDMatrixOptics.trace","text":"trace(elems::Vector{<:Element}, b0::AbstractBeam)\n\nTrace a beam b0 through a vector of elements elems. All intermediate states of the beam will be recorded.\n\nReturn is a Vector of states where the last entry is the final beam. Final beam is equivalent to propagate(elems, b0).\n\nExample\n\njulia> trace([ThinLens(10), FreeSpace(10)], GeometricBeam(w=10.0, k=0.0))\n3-element Vector{GeometricBeam{Float64}}:\n GeometricBeam{Float64}(10.0, 0.0, 0.0)\n GeometricBeam{Float64}(10.0, -1.0, 0.0)\n GeometricBeam{Float64}(0.0, -1.0, 10.0)\n\n\n\n\n\n","category":"function"},{"location":"basics/#ABCDMatrixOptics.transfer_matrix","page":"Essential Functions","title":"ABCDMatrixOptics.transfer_matrix","text":"transfer_matrix(element::Element)\n\nReturns the Ray Transfer (ABCD) matrix associated with the given, optical element.\n\n\n\n\n\ntransfer_matrix(elements)\n\nReturns the Ray Transfer (ABCD) matrix associated with an optical system described by a collection (e.g. a vector or iteration) of optical elements.\n\n\n\n\n\n","category":"function"},{"location":"#ABCDMatrixOptics.jl","page":"ABCDMatrixOptics.jl","title":"ABCDMatrixOptics.jl","text":"","category":"section"},{"location":"","page":"ABCDMatrixOptics.jl","title":"ABCDMatrixOptics.jl","text":"This package implements the linear tracing of simple optical systems based on the Ray transfer matrix analysis. The convention of the optical elements is identical to those on Wikipedia.","category":"page"},{"location":"","page":"ABCDMatrixOptics.jl","title":"ABCDMatrixOptics.jl","text":"See on GitHub for current issues, news...","category":"page"},{"location":"#Installation","page":"ABCDMatrixOptics.jl","title":"Installation","text":"","category":"section"},{"location":"","page":"ABCDMatrixOptics.jl","title":"ABCDMatrixOptics.jl","text":"This package is registered, so do","category":"page"},{"location":"","page":"ABCDMatrixOptics.jl","title":"ABCDMatrixOptics.jl","text":"julia> ]add ABCDMatrixOptics.jl","category":"page"},{"location":"#Simple-Example","page":"ABCDMatrixOptics.jl","title":"Simple Example","text":"","category":"section"},{"location":"","page":"ABCDMatrixOptics.jl","title":"ABCDMatrixOptics.jl","text":"A simple 4f re-imaging system with a magnification of 2 can be expressed as:","category":"page"},{"location":"","page":"ABCDMatrixOptics.jl","title":"ABCDMatrixOptics.jl","text":"using ABCDMatrixOptics\n\n# create needed optical elements\nf1 = FreeSpace(200)\nl1 = ThinLens(200.0)\nf12 = FreeSpace(200 + 400)\nl2 = ThinLens(400.0)\nf2 = FreeSpace(400)\n\n# simple, single ray\nbeam = GeometricBeam(w=10.0, k=0.1)\n\n# create optical system\n# it's built from left to right.\nM = [f1, l1, f12, l2, f2]\n\n# apply the system to the beam\n# The matrices are evaluates as f2 * l2 * f12 * l1 * f1 * beam\n# * is syntactic sugar for propagate\nbeam_p = M * beam\nGeometricBeam{Float64}(-19.999999999999996, -0.05000000000000001, 1200.0)\n# beam is magnified by 2 in size\n\n\n# GaussianBeam\nred_beam = GaussianBeam(w0=5e-3)\nblue_beam = GaussianBeam(w0=5e-3, λ=405e-9)\n\nusing Plots\n\nplot(M, red_beam)\nplot!(M, blue_beam)","category":"page"},{"location":"beams/#Beams","page":"Beams","title":"Beams","text":"","category":"section"},{"location":"beams/","page":"Beams","title":"Beams","text":"AbstractBeam","category":"page"},{"location":"beams/#ABCDMatrixOptics.AbstractBeam","page":"Beams","title":"ABCDMatrixOptics.AbstractBeam","text":"abstract type AbstractBeam{T}\n\nServes as abstract type for GeometricBeam and GaussianBeam.\n\n\n\n\n\n","category":"type"},{"location":"beams/#Simple-Geometric-Beam","page":"Beams","title":"Simple Geometric Beam","text":"","category":"section"},{"location":"beams/","page":"Beams","title":"Beams","text":"GeometricBeam","category":"page"},{"location":"beams/#ABCDMatrixOptics.GeometricBeam","page":"Beams","title":"ABCDMatrixOptics.GeometricBeam","text":"GeometricBeam(w=0.0, k=0.0, z=0.0)\n\nDefines a geometrical ray beam with keywords. Distance to the axis is w, the angle with respect to the axis is k. zpos is the initial position along the optical axis.\n\nSee also GaussianBeam.\n\nExample\n\njulia> GeometricBeam(w=1.0)\nGeometricBeam{Float64}(1.0, 0.0, 0.0)\n\n\n\n\n\n","category":"type"},{"location":"beams/#Simple-Gaussian-Beam","page":"Beams","title":"Simple Gaussian Beam","text":"","category":"section"},{"location":"beams/","page":"Beams","title":"Beams","text":"GaussianBeam\nABCDMatrixOptics.z\nABCDMatrixOptics.zR\nABCDMatrixOptics.R\nABCDMatrixOptics.w0\nABCDMatrixOptics.w","category":"page"},{"location":"beams/#ABCDMatrixOptics.GaussianBeam","page":"Beams","title":"ABCDMatrixOptics.GaussianBeam","text":"struct GaussianBeam{T} <: AbstractBeam{T}\n    q\n    zpos\n    n\n    λ\nend\n\n\n\n\n\n","category":"type"},{"location":"beams/#ABCDMatrixOptics.z","page":"Beams","title":"ABCDMatrixOptics.z","text":"z(beam::GaussianBeam)\n\nReturn the distance to the beam waist z of the Gaussian beam.\n\nSee also z,zR,w,R,w0.\n\n\n\n\n\n","category":"function"},{"location":"beams/#ABCDMatrixOptics.zR","page":"Beams","title":"ABCDMatrixOptics.zR","text":"z(beam::GaussianBeam)\n\nReturn Rayleigh length zR of the Gaussian beam.\n\nSee also z, w, R, w0.\n\n\n\n\n\n","category":"function"},{"location":"beams/#ABCDMatrixOptics.R","page":"Beams","title":"ABCDMatrixOptics.R","text":"R(beam::GaussianBeam)\n\nReturn curvature R of the Gaussian beam.\n\nSee also z, zR, w, w0.\n\n\n\n\n\n","category":"function"},{"location":"beams/#ABCDMatrixOptics.w0","page":"Beams","title":"ABCDMatrixOptics.w0","text":"w0(beam::GaussianBeam)\n\nReturn w0 of the Gaussian beam.\n\nSee also z, zR, w, R.\n\n\n\n\n\n","category":"function"},{"location":"beams/#ABCDMatrixOptics.w","page":"Beams","title":"ABCDMatrixOptics.w","text":"w(beam::GaussianBeam)\n\nReturn current width w of the Gaussian beam.\n\nSee also z, zR, R, w0.\n\n\n\n\n\n","category":"function"}]
}
