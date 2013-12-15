PkgUtils.jl
=================

This package contains tools for analyzing Julia packages.

For now, it provides tools to build a highly simplified package search engine that can be queried as a service:

# Example

Build a simplified search engine service:

	using PkgUtils
	PkgUtils.runservice()

Run a search website:

	cd .julia/PkgUtils
	julia scripts/server.jl
	open site/index.html
