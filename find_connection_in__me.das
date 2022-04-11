implementation find_connection_in__me (childobj, etag)
  { for every item in connections of me => connection
      { synonym sender = connection.sender
          { when all
              {
                  sender.component == childobj.name
                  sender.etag == etag
              }
              { -> connection }
          }
      }
  }
  { check return "find_connection_in__me: connection not found for ${childobj.name}:${etag}" }

