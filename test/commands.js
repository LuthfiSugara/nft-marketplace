const instance = await NftMarket.deployed();

instance.mintToken("https://gateway.pinata.cloud/ipfs/Qme87EXmHKUg6Q9cvtwXbH6JPgfgCTZTcG7gKUAuwRoQrj?_gl=1*1f6ynfe*_ga*MTg4MzM5MDc4My4xNjc1MzA4OTgw*_ga_5RMPXG14TE*MTY3NTMwODk4MC4xLjEuMTY3NTMwOTQzNC40Mi4wLjA.", "500000000000000000", { value: "25000000000000000",from: accounts[0]});

instance.mintToken("https://gateway.pinata.cloud/ipfs/QmNbDgkGNFJyXy2hApyJdaTatMSqXuhgebS1MiVW8oTeRy?_gl=1*1f6ynfe*_ga*MTg4MzM5MDc4My4xNjc1MzA4OTgw*_ga_5RMPXG14TE*MTY3NTMwODk4MC4xLjEuMTY3NTMwOTQzNC40Mi4wLjA.","300000000000000000",{ value: "25000000000000000",from: accounts[0]});