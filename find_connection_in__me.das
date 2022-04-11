implementation find_connection_in__me (child, etag)
  { for every item in connections of me => connection
      { synonym sender = connection.sender
          { when all
              {
                  sender.component == child.name
                  sender.etag == etag
              }
              { -> connection }
          }
      }
  }
  { check return "find_connection_in__me: connection not found for ${child.name}:${etag}" }

