implementation find_connection_in__me (childname, etag)
  { for every item in connections of me => connection
      { synonym sender = connection.sender
          { when all
              {
                  sender.name == childname
                  sender.etag == etag
              }
              { -> connection }
          }
      }
  }
  { check return "find_connection_in__me: connection not found for ${childname}:${etag}" }

