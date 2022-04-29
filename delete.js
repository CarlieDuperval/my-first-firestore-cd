import {restaurantsCol} from './connectDb.js'

// Created restaurant nhWCJqlDNhHdULMbW4Y5
// Created restaurant 5IdcTTxzpypoBs3S2xJP
// Created restaurant tESUM4Scldxk7VMs7vFA


// delete nhWCJqlDNhHdULMbW4Y5
restaurantsCol.doc('nhWCJqlDNhHdULMbW4Y5').delete()
.then( res => console.log('Success deleting nhWCJqlDNhHdULMbW4Y5!!'))
.catch( err => console.error('Error deleting nhWCJqlDNhHdULMbW4Y5!!', err))


restaurantsCol.doc('5IdcTTxzpypoBs3S2xJP').delete()
.then( res => console.log('Success deleting 5IdcTTxzpypoBs3S2xJP!!'))
.catch( err => console.error('Error deleting 5IdcTTxzpypoBs3S2xJP!!', err))




restaurantsCol.doc('tESUM4Scldxk7VMs7vFA').delete()
.then( res => console.log('Success deleting tESUM4Scldxk7VMs7vFA!!'))
.catch( err => console.error('Error deleting tESUM4Scldxk7VMs7vFA!!', err))
